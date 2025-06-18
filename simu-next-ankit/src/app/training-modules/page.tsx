'use client';

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Eye } from "lucide-react";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
} from "@/components/ui/dialog";
import AddTrainingModule from "@/components/AddTrainingModule";
import { useSelector } from "react-redux";
import { RootState } from "@/lib/store";

const TrainingPage = () => {
 

  const {modules} = useSelector((state:RootState)=>state.module)

  return (
    <div className="p-5">
      <Dialog>
        <DialogTrigger asChild>
          <Button>Add Training Module</Button>
        </DialogTrigger>
        <DialogContent>
          <AddTrainingModule />
        </DialogContent>
      </Dialog>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-5">
        {modules.map((module) => (
          <div key={module.id} className="border rounded p-4 shadow">
            <img
              src={module.image}
              alt={module.moduleName}
              className="w-full h-40 object-cover object-center mb-3"
            />
            <h2 className="text-lg font-semibold">{module.moduleName}</h2>
            <Button>
              <Link
                href={`/training-module-preview?id=${module.id}`}
                target="_blank"
              >
                <Eye />
              </Link>
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrainingPage;
