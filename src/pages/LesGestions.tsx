import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Syringe, Calendar, Heart, ClipboardList, Search, Plus } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import DashboardLayout from "@/components/layout/DashboardLayout";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { SurgeryForm } from "@/components/forms/SurgeryForm";
import { MedicationForm } from "@/components/forms/MedicationForm";
import { AppointmentForm } from "@/components/forms/AppointmentForm";
import { AnimalForm } from "@/components/forms/AnimalForm";
import { useState } from "react";

const LesGestions = () => {
  const [openDialog, setOpenDialog] = useState<string | null>(null);
  
  const closeDialog = () => setOpenDialog(null);
  
  return (
    <DashboardLayout>
      <div className="animate-fade-in">
        <h1 className="text-3xl font-bold mb-6">Les Gestions</h1>
        
        <Tabs defaultValue="surgeries" className="animate-slide-up-fade animation-delay-100">
          <TabsList className="grid grid-cols-4 mb-8 w-full max-w-3xl">
            <TabsTrigger value="surgeries" className="flex items-center gap-2">
              <ClipboardList className="h-4 w-4" />
              <span>Chirurgies</span>
            </TabsTrigger>
            <TabsTrigger value="medications" className="flex items-center gap-2">
              <Syringe className="h-4 w-4" />
              <span>Médicaments</span>
            </TabsTrigger>
            <TabsTrigger value="appointments" className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              <span>Rendez-vous</span>
            </TabsTrigger>
            <TabsTrigger value="animals" className="flex items-center gap-2">
              <Heart className="h-4 w-4" />
              <span>Animaux</span>
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="surgeries" className="space-y-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-semibold">Gestion des Chirurgies</h2>
              <div className="flex gap-3">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                  <Input placeholder="Rechercher..." className="pl-10 w-[250px]" />
                </div>
                <Dialog open={openDialog === 'surgery'} onOpenChange={(open) => open ? setOpenDialog('surgery') : closeDialog()}>
                  <DialogTrigger asChild>
                    <Button className="btn-animated animate-scale-bounce">
                      <Plus className="h-4 w-4 mr-2" />
                      Nouvelle Chirurgie
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-md">
                    <DialogHeader>
                      <DialogTitle>Ajouter une nouvelle chirurgie</DialogTitle>
                      <DialogDescription>
                        Remplissez le formulaire ci-dessous pour ajouter une nouvelle chirurgie.
                      </DialogDescription>
                    </DialogHeader>
                    <div className="py-4">
                      <SurgeryForm onSuccess={closeDialog} />
                    </div>
                  </DialogContent>
                </Dialog>
              </div>
            </div>
            
            <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              {[1, 2, 3].map((i) => (
                <Card key={i} className="card-animated animate-scale-bounce animation-delay-200">
                  <CardHeader className="pb-2">
                    <CardTitle>Stérilisation</CardTitle>
                    <CardDescription>Chat - Européen</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Date:</span>
                        <span className="font-medium">15 Nov 2023</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Animal:</span>
                        <span className="font-medium">Luna</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Statut:</span>
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                          Complété
                        </span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="medications" className="space-y-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-semibold">Gestion des Médicaments</h2>
              <div className="flex gap-3">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                  <Input placeholder="Rechercher..." className="pl-10 w-[250px]" />
                </div>
                <Dialog open={openDialog === 'medication'} onOpenChange={(open) => open ? setOpenDialog('medication') : closeDialog()}>
                  <DialogTrigger asChild>
                    <Button className="btn-animated animate-scale-bounce">
                      <Plus className="h-4 w-4 mr-2" />
                      Nouveau Médicament
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-md">
                    <DialogHeader>
                      <DialogTitle>Ajouter un nouveau médicament</DialogTitle>
                      <DialogDescription>
                        Remplissez le formulaire ci-dessous pour ajouter un nouveau médicament.
                      </DialogDescription>
                    </DialogHeader>
                    <div className="py-4">
                      <MedicationForm onSuccess={closeDialog} />
                    </div>
                  </DialogContent>
                </Dialog>
              </div>
            </div>
            
            <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              {[1, 2, 3, 4].map((i) => (
                <Card key={i} className="card-animated animate-scale-bounce animation-delay-300">
                  <CardHeader className="pb-2">
                    <CardTitle>Amoxicilline</CardTitle>
                    <CardDescription>Antibiotique</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Dosage:</span>
                        <span className="font-medium">250mg</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Stock:</span>
                        <span className="font-medium">43 unités</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Statut:</span>
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                          Disponible
                        </span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="appointments" className="space-y-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-semibold">Gestion des Rendez-vous</h2>
              <div className="flex gap-3">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                  <Input placeholder="Rechercher..." className="pl-10 w-[250px]" />
                </div>
                <Dialog open={openDialog === 'appointment'} onOpenChange={(open) => open ? setOpenDialog('appointment') : closeDialog()}>
                  <DialogTrigger asChild>
                    <Button className="btn-animated animate-scale-bounce">
                      <Plus className="h-4 w-4 mr-2" />
                      Nouveau Rendez-vous
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-md">
                    <DialogHeader>
                      <DialogTitle>Ajouter un nouveau rendez-vous</DialogTitle>
                      <DialogDescription>
                        Remplissez le formulaire ci-dessous pour ajouter un nouveau rendez-vous.
                      </DialogDescription>
                    </DialogHeader>
                    <div className="py-4">
                      <AppointmentForm onSuccess={closeDialog} />
                    </div>
                  </DialogContent>
                </Dialog>
              </div>
            </div>
            
            <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              {[1, 2, 3, 4, 5].map((i) => (
                <Card key={i} className="card-animated animate-scale-bounce animation-delay-400">
                  <CardHeader className="pb-2">
                    <CardTitle>Consultation Routine</CardTitle>
                    <CardDescription>Chien - Labrador</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Date:</span>
                        <span className="font-medium">22 Nov 2023</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Heure:</span>
                        <span className="font-medium">14:30</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Animal:</span>
                        <span className="font-medium">Max</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="animals" className="space-y-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-semibold">Gestion des Animaux</h2>
              <div className="flex gap-3">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                  <Input placeholder="Rechercher..." className="pl-10 w-[250px]" />
                </div>
                <Dialog open={openDialog === 'animal'} onOpenChange={(open) => open ? setOpenDialog('animal') : closeDialog()}>
                  <DialogTrigger asChild>
                    <Button className="btn-animated animate-scale-bounce">
                      <Plus className="h-4 w-4 mr-2" />
                      Nouvel Animal
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-md">
                    <DialogHeader>
                      <DialogTitle>Ajouter un nouvel animal</DialogTitle>
                      <DialogDescription>
                        Remplissez le formulaire ci-dessous pour ajouter un nouvel animal.
                      </DialogDescription>
                    </DialogHeader>
                    <div className="py-4">
                      <AnimalForm onSuccess={closeDialog} />
                    </div>
                  </DialogContent>
                </Dialog>
              </div>
            </div>
            
            <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <Card key={i} className="card-animated animate-scale-bounce animation-delay-500">
                  <CardHeader className="pb-2">
                    <CardTitle>Luna</CardTitle>
                    <CardDescription>Chat - Européen - 4 ans</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Propriétaire:</span>
                        <span className="font-medium">Marie Dupont</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Dernière visite:</span>
                        <span className="font-medium">15 Oct 2023</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Statut:</span>
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                          En bonne santé
                        </span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  );
};

export default LesGestions;
