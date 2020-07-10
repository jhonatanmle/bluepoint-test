import React, { useContext, useState } from "react";
import { Input, Button } from "antd";
import { CheckOutlined } from '@ant-design/icons';

import './index.scss';
import { UserContext } from "../../shared/user/context";

const TableCell = ({ text }) => {
  const { setEditable, users, setUsers } = useContext(UserContext);
  const [isInput, setIsInput] = useState(false);
  const [value, setValue] = useState(text);

  const handleEdit = (isInput) => {
    validateUserEdit();
    setIsInput(isInput);
  }

  const validateUserEdit = () => {
    const cellIndex = users.findIndex(user => user.valor_acceso === text);

    if(cellIndex > -1 && users[cellIndex].valor_acceso !== value) {
      setEditable(true);
      users[cellIndex].valor_acceso = value;
      setUsers([...users]);
    }
  }

  return (
    <>
      <div>
        {isInput ? (
          <div className="input-cell">
            <Input placeholder="Valor acceso" value={value} onChange={e => setValue(e.target.value)}/>
            <Button onClick={() => handleEdit(false)} className="icon" type="primary" shape="circle" icon={<CheckOutlined />} />
          </div>
        ) : (
          <span onClick={() => handleEdit(true)}>{value}</span>
        )}
      </div>
    </>
  );
};

export default TableCell;
