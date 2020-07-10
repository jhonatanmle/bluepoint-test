import { useCallback, useContext } from "react";
import { getUsersData, updateUser } from "../../core/services/user";
import { UserContext } from "../../shared/user/context";

const useSearch = (form) => {
  const { setUsers, users, setEditable } = useContext(UserContext);

  const getUsers = useCallback(
    async (request) => {
      const data = await getUsersData(request);
      console.log(data);
      setUsers(data);
    },
    [setUsers]
  );

  const initFormValues = useCallback(() => {
    form.setFieldsValue({
      user: "xchohermenegildo",
      token: "11.8839813279919",
      userId: 17,
    });
  }, [form]);

  const updateData = async () => {
    const { user: userSess, token, userId } = form.getFieldsValue();
    const requestList = users.map(user => {
      const { valor_acceso, origen_acceso_id } = user;
      return {
        user: userSess,
        token: token,
        userId: userId,
        origen_acceso_id: origen_acceso_id,
        valor_acceso: valor_acceso,
      }
    })

    for (let index = 0; index < requestList.length; index++) {
      const element = requestList[index];
      await updateUser(element);
    }

    setEditable(false);
  }

  return {
    getUsers,
    initFormValues,
    updateData
  }
}

export {
  useSearch
}
