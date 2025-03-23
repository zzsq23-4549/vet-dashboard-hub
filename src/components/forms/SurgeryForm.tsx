
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

const surgeryFormSchema = z.object({
  type: z.string().min(2, { message: "Le type de chirurgie est requis" }),
  date: z.string().min(2, { message: "La date est requise" }),
  animal: z.string().min(2, { message: "L'animal est requis" }),
  notes: z.string().optional(),
});

type SurgeryFormValues = z.infer<typeof surgeryFormSchema>;

const defaultValues: Partial<SurgeryFormValues> = {
  type: "",
  date: "",
  animal: "",
  notes: "",
};

export function SurgeryForm({ onSuccess }: { onSuccess?: () => void }) {
  const form = useForm<SurgeryFormValues>({
    resolver: zodResolver(surgeryFormSchema),
    defaultValues,
  });

  function onSubmit(data: SurgeryFormValues) {
    console.log(data);
    toast.success("Chirurgie ajoutée avec succès!");
    form.reset();
    if (onSuccess) onSuccess();
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 animate-fade-in">
        <FormField
          control={form.control}
          name="type"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Type de Chirurgie</FormLabel>
              <FormControl>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <SelectTrigger>
                    <SelectValue placeholder="Sélectionner un type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="sterilisation">Stérilisation</SelectItem>
                    <SelectItem value="castration">Castration</SelectItem>
                    <SelectItem value="fracture">Réparation de fracture</SelectItem>
                    <SelectItem value="dentaire">Chirurgie dentaire</SelectItem>
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
          name="date"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Date</FormLabel>
              <FormControl>
                <Input type="date" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <FormField
          control={form.control}
          name="animal"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Animal</FormLabel>
              <FormControl>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <SelectTrigger>
                    <SelectValue placeholder="Sélectionner un animal" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="luna">Luna (Chat - Européen)</SelectItem>
                    <SelectItem value="max">Max (Chien - Labrador)</SelectItem>
                    <SelectItem value="ruby">Ruby (Chat - Siamois)</SelectItem>
                  </SelectContent>
                </Select>
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
              <FormLabel>Notes supplémentaires</FormLabel>
              <FormControl>
                <Textarea rows={3} {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <Button type="submit" className="w-full btn-animated">Ajouter la chirurgie</Button>
      </form>
    </Form>
  );
}
