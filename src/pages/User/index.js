import React, { useState } from "react";
import { Table } from "antd";
import { columnsTable } from "../../shared/user-table";
import { UserContext } from "../../shared/user/context";
import Search from "../../components/Search";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [editable, setEditable] = useState(false);

  const userContext = {
    editable,
    setEditable,
    users,
    setUsers,
  };

  return (
    <UserContext.Provider value={userContext}>
      <Search />
      {users && (
        <Table
          dataSource={users}
          columns={columnsTable}
          rowKey="origen_acceso_id"
        />
      )}
    </UserContext.Provider>
  );
};

export default Users;
