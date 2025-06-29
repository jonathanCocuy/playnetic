import { ColumnsTypes } from "../Interface/columns-types";

export const columns: ColumnsTypes[][] = [
  [
    {
      id: 1,
      name: "Nombre:",
      type: "name",
      columnNumber: 2,
      draggable: false,
    },

    {
      id: 2,
      name: "Apellido:",
      type: "lastName",
      columnNumber: 3,
      draggable: false,
    },
    {
      id: 3,
      name: "Edad:",
      type: "age",
      columnNumber: 4,
      draggable: true,
    },
    {
      id: 4,
      name: "Nacionalidad:",
      type: "nationality",
      columnNumber: 5,
      draggable: true,
    },
  ],

  /* Level 2 */
  [
    {
      id: 1,
      name: "Nombre:",
      type: "name",
      columnNumber: 2,
      draggable: false,
    },

    {
      id: 2,
      name: "Apellido:",
      type: "lastName",
      columnNumber: 3,
      draggable: true,
    },
    {
      id: 3,
      name: "Edad:",
      type: "age",
      columnNumber: 4,
      draggable: true,
    },
    {
      id: 4,
      name: "Nacionalidad:",
      type: "nationality",
      columnNumber: 5,
      draggable: true,
    },
  ]
];
