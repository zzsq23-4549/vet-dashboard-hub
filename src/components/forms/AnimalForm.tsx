
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

const animalFormSchema = z.object({
  name: z.string().min(2, { message: "Le nom de l'animal est requis" }),
  species: z.string().min(2, { message: "L'espèce est requise" }),
  breed: z.string().min(2, { message: "La race est requise" }),
  age: z.string().min(1, { message: "L'âge est requis" }),
  owner: z.string().min(2, { message: "Le propriétaire est requis" }),
  notes: z.string().optional(),
});

type AnimalFormValues = z.infer<typeof animalFormSchema>;

const defaultValues: Partial<AnimalFormValues> = {
  name: "",
  species: "",
  breed: "",
  age: "",
  owner: "",
  notes: "",
};

export function AnimalForm({ onSuccess }: { onSuccess?: () => void }) {
  const form = useForm<AnimalFormValues>({
    resolver: zodResolver(animalFormSchema),
    defaultValues,
  });

  function onSubmit(data: AnimalFormValues) {
    console.log(data);
    toast.success("Animal ajouté avec succès!");
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
              <FormLabel>Nom de l'Animal</FormLabel>
              <FormControl>
                <Input placeholder="ex: Luna" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <FormField
          control={form.control}
          name="species"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Espèce</FormLabel>
              <FormControl>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <SelectTrigger>
                    <SelectValue placeholder="Sélectionner une espèce" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="chat">Chat</SelectItem>
                    <SelectItem value="chien">Chien</SelectItem>
                    <SelectItem value="lapin">Lapin</SelectItem>
                    <SelectItem value="oiseau">Oiseau</SelectItem>
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
          name="breed"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Race</FormLabel>
              <FormControl>
                <Input placeholder="ex: Européen" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <FormField
          control={form.control}
          name="age"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Âge (années)</FormLabel>
              <FormControl>
                <Input type="number" placeholder="ex: 4" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <FormField
          control={form.control}
          name="owner"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Propriétaire</FormLabel>
              <FormControl>
                <Input placeholder="ex: Marie Dupont" {...field} />
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
              <FormLabel>Notes médicales</FormLabel>
              <FormControl>
                <Textarea rows={3} {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <Button type="submit" className="w-full btn-animated">Ajouter l'animal</Button>
      </form>
    </Form>
  );
}
