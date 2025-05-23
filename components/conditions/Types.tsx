import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const FistulaTypes = ({
  types,
}: {
  types: { type: string; description: string; procedure: string }[];
}) => {
  return (
    <div className="bg-white py-16 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-onest text-gray-800 mb-10 text-center">
          Fistula Types and Surgical Procedures
        </h2>

        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow className="bg-blue-50">
                <TableHead className="text-gray-800">Type of Fistula</TableHead>
                <TableHead className="text-gray-800">Description</TableHead>
                <TableHead className="text-gray-800">
                  Surgical Procedure
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {types.map((item, index) => (
                <TableRow key={index} className="hover:bg-gray-50">
                  <TableCell>
                    <span className="font-medium text-clinic-primary">
                      {item.type}
                    </span>
                  </TableCell>
                  <TableCell className="text-gray-600">
                    {item.description}
                  </TableCell>
                  <TableCell className="text-gray-600">
                    <strong>{item.procedure.split(" - ")[0]}</strong> -{" "}
                    {item.procedure.split(" - ")[1]}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        <div className="mt-10 text-center">
          <p className="text-gray-600 mb-6">
            At Total MediCare, our specialist proctologists will determine the
            best surgical approach based on the specific type and location of
            your fistula, ensuring the best outcome with minimal disruption to
            sphincter function.
          </p>
          <button className="bg-clinic-primary hover:bg-clinic-dark text-white font-semibold py-3 px-8 rounded-lg transition-colors">
            Schedule a Consultation
          </button>
        </div>
      </div>
    </div>
  );
};

export default FistulaTypes;
