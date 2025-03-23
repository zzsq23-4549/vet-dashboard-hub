
import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

const medicationFormSchema = z.object({
  name: z.string().min(2, { message: "Le nom du médicament est requis" }),
  category: z.string().min(2, { message: "La catégorie est requise" }),
  dosage: z.string().min(1, { message: "Le dosage est requis" }),
  stock: z.string().min(1, { message: "Le stock est requis" }),
  notes: z.string().optional(),
});

type MedicationFormValues = z.infer<typeof medicationFormSchema>;

const defaultValues: Partial<MedicationFormValues> = {
  name: "",
  category: "",
  dosage: "",
  stock: "",
  notes: "",
};

export function MedicationForm({ onSuccess }: { onSuccess?: () => void }) {
  const form = useForm<MedicationFormValues>({
    resolver: zodResolver(medicationFormSchema),
    defaultValues,
  });

  function onSubmit(data: MedicationFormValues) {
    console.log(data);
    toast.success("Médicament ajouté avec succès!");
    form.reset();
    if (onSuccess) onSuccess();
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 animate-fade-in">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nom du Médicament</FormLabel>
              <FormControl>
                <Input placeholder="ex: Amoxicilline" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <FormField
          control={form.control}
          name="category"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Catégorie</FormLabel>
              <FormControl>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <SelectTrigger>
                    <SelectValue placeholder="Sélectionner une catégorie" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="antibiotique">Antibiotique</SelectItem>
                    <SelectItem value="analgesique">Analgésique</SelectItem>
                    <SelectItem value="antiparasitaire">Antiparasitaire</SelectItem>
                    <SelectItem value="vitamines">Vitamines</SelectItem>
                    <SelectItem value="autre">Autre</SelectItem>
                  </SelectContent>
                </Select>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <FormField
          control={form.control}
          name="dosage"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Dosage</FormLabel>
              <FormControl>
                <Input placeholder="ex: 250mg" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <FormField
          control={form.control}
          name="stock"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Stock disponible</FormLabel>
              <FormControl>
                <Input type="number" placeholder="ex: 50" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <FormField
          control={form.control}
          name="notes"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Instructions spéciales</FormLabel>
              <FormControl>
                <Textarea rows={3} {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <Button type="submit" className="w-full btn-animated">Ajouter le médicament</Button>
      </form>
    </Form>
  );
}
