import React from 'react';
import TableCell from "../components/TableCell";

const columnsTable = [
  {
    title: 'Codigo Estado',
    dataIndex: 'codigo_estado',
    key: 'codigo_estado',
  },
  {
    title: 'Fecha Actualización',
    dataIndex: 'fecha_actualizacion',
    key: 'fecha_actualizacion',
  },
  {
    title: 'Origen Acceso ID',
    dataIndex: 'origen_acceso_id',
    key: 'origen_acceso_id',
  },
  {
    title: 'Tipo Acceso',
    dataIndex: 'tipo_acceso',
    key: 'tipo_acceso',
  },
  {
    title: 'Usuario Actualización',
    dataIndex: 'usuario_actualizacion',
    key: 'usuario_actualizacion',
  },
  {
    title: 'Valor Acceso',
    dataIndex: 'valor_acceso',
    key: 'valor_acceso',
    render: (text) => {
      return <TableCell text={text}/>
    },
  }
]

export {
  columnsTable
}
