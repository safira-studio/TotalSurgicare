import React from "react";

type FistulaType = {
  type: string;
  description: string;
  procedure: string;
};

const FistulaTypes = ({
  name,
  types,
}: {
  name: string;
  types: FistulaType[];
}) => {
  return (
    <div className="bg-white sm:px-6 py-10">
      <div className="max-w-full px-6 mx-auto">
        <h2 className="text-2xl sm:text-3xl font-onest text-gray-800 mb-8 sm:mb-10 text-center">
          {name} Types and Surgical Procedures
        </h2>

        {/* Table layout for md and above */}
        <div className="overflow-x-auto hidden md:block">
          <table className="min-w-full">
            <thead>
              <tr className="bg-blue-50">
                <th className="text-gray-800 px-4 py-2 text-left">
                  Type of {name}
                </th>
                <th className="text-gray-800 px-4 py-2 text-left">
                  Description
                </th>
                <th className="text-gray-800 px-4 py-2 text-left">
                  Surgical Procedure
                </th>
              </tr>
            </thead>
            <tbody>
              {types.map((item, index) => {
                const [title, detail] = item.procedure.split(" - ");
                return (
                  <tr key={index} className="hover:bg-gray-50">
                    <td className="font-medium text-clinic-primary px-4 py-3 whitespace-nowrap">
                      {item.type}
                    </td>
                    <td className="text-gray-600 px-4 py-3">
                      {item.description}
                    </td>
                    <td className="text-gray-600 px-4 py-3">
                      <strong>{title}</strong>
                      {detail ? ` - ${detail}` : ""}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        {/* Card layout for mobile */}
        <div className="md:hidden space-y-4">
          {types.map((item, index) => {
            const [title, detail] = item.procedure.split(" - ");
            return (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm"
              >
                <h3 className="font-medium text-clinic-primary mb-2">
                  {item.type}
                </h3>
                <p className="text-gray-600 mb-2">
                  <span className="font-semibold">Description:</span>{" "}
                  {item.description}
                </p>
                <p className="text-gray-600">
                  <span className="font-semibold">Surgical Procedure:</span>{" "}
                  <strong>{title}</strong>
                  {detail ? ` - ${detail}` : ""}
                </p>
              </div>
            );
          })}
        </div>

        {/* Footer */}
        <div className="mt-10 text-center px-2 sm:px-0">
          <p className="text-gray-600 mb-6 text-sm sm:text-base max-w-2xl mx-auto">
            At Total MediCare, our specialist proctologists determine the best
            surgical approach based on the specific type and location of your{" "}
            {name.toLowerCase()}, ensuring optimal outcomes with minimal
            disruption to sphincter function.
          </p>
          <button className="bg-clinic-primary hover:bg-clinic-dark text-white font-semibold py-3 px-8 rounded-lg transition-colors text-sm sm:text-base">
            Schedule a Consultation
          </button>
        </div>
      </div>
    </div>
  );
};

export default FistulaTypes;
