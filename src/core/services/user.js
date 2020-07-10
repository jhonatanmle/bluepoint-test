import axios from 'axios';

import { notification } from 'antd';

const urlBase = 'https://www.crmetric.com/srv-crmetric-web-cdc-test/rest/usuario';

const validateStatus = (type, title, description) => {
  notification[type]({
    message: title,
    description,
    placement: 'bottomRight'
  });
}

const getUsersData = async ({user, token, userId}) => {
    const body = {
        Sess: {
            User: user,
            Token: token,
            usuario_id: userId
        }
    }
    const url = `${urlBase}/listarOrigenAcceso`;
    try {
      const { data: response } = await axios.post(url, body);

      const { data } = response;

      if(!(data && data.length && data[0]['origen_acceso'])) {
        return [];
      }

      return data[0]['origen_acceso'];

    } catch (error) {
      validateStatus('error', 'Bluepoint', 'Ocurrio un error');
      console.error(error);
    }
    return [];
}

const updateUser = async (request ) => {
  const url = `${urlBase}/actualizarOrigenAcceso`;
  const { user, token, userId, origen_acceso_id, valor_acceso } = request;
  const body = {
    Sess: {
      User: user,
      Token: token,
      usuario_id: userId,
      origen_acceso_id,
      valor_acceso,
      codigo_estado : 1,
    }
  }

  try {
    const { data } = await axios.post(url, body);
    const { codigo, mensaje } = data;
    if(codigo === '100' ) {
      validateStatus('success', 'Bluepoint', mensaje)
    }

  } catch (error) {
    validateStatus('error', 'Bluepoint', 'Ocurrio un error');
    console.error(error);
  }
}

export {
  getUsersData,
  updateUser
}
