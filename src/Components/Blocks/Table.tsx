import React from "react";

interface Props {
  data: any;
}

export const Table: React.FC<Props> = ({ ...props }) => {
  return (
    <div className="overflow-x-auto relative shadow-md rounded-lg">
      <table className="w-full text-left text-base-content">
        {props.data.rows.map((row: any, i: number) => {
          if (i === 0) {
            return (
              <thead className="uppercase font-bold text-sm text-amber-900 bg-base-300">
                <tr className="" key={i}>
                  {row.cells.map((j: any, a: number) => {
                    return (
                      <th className="py-4 px-6" key={a}>
                        {j}
                      </th>
                    );
                  })}
                </tr>
              </thead>
            );
          }
          return (
            <tbody>
              <tr className="hover:bg-base-200" key={i}>
                {row.cells.map((j: any, a: number) => {
                  return (
                    <td className="py-4 px-6" key={a}>
                      {j}
                    </td>
                  );
                })}
              </tr>
            </tbody>
          );
        })}
      </table>
    </div>
  );
};
