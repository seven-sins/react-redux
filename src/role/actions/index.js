/**
 * Created by seven sins on 1/7/2017.
 */
import { http } from '../../common/common';

const updateData = response => {
    return {
        type: http.LOAD,
        data: response.data,
        total: response.total
    }
};
const get = (dispatch, filter) => {
    http.request("/api/role" + http.convert(filter), { method: 'GET' },
        data => {
            dispatch(updateData({ data: data.data, total: data.total }));
        });
};
export const load = filter => {
    return dispatch => {
        get(dispatch, filter);
    }
};
export const remove = role => {
    return dispatch => {
        http.request( "/api/role/" + role.id, { method: 'DELETE' },
            data => {
                get(dispatch);
            });
    }
};
export const save = (role, callback) => {
    let method = role.id ? "PUT" : "POST";
    let url = role.id ? "/api/role/" + role.id : "/api/role";

    return (dispatch, getState) => {
        http.request(url, { body: JSON.stringify(role), method: method },
            data => {
                callback.call();
            });
    };
};
////////////////////////////// 所有 status = 0 权限列表
const updatePrivilege = response => {
    return {
        type: 'LOADPRIVILEGE',
        privileges: response.privileges
    }
};
export const loadPrivilege = () => {
    return dispatch => {
        dispatch(updatePrivilege({ privileges: [] })); // 先清空store中的缓存
        http.request("/api/privilege/all", { method: 'GET' },
            data => {
                dispatch(updatePrivilege({ privileges: data.data }));
            });
    }
};
export const savePrivilege = (data, callback) => {
    return dispatch => {
        http.request("/api/rolePrivilege/" + data.id, { method: 'PUT', body: JSON.stringify(data) },
            data => {
                if(callback) callback.call();
            });
    }
};
///////////////////////////////////// 所有 roleId = role.id 权限列表
const updateRolePrivilege = response => {
    return {
        type: 'LOADROLEPRIVILEGE',
        rolePrivileges: response.rolePrivileges
    }
};
export const loadRolePrivilege = (role, callback) => {
    return dispatch => {
        dispatch(updateRolePrivilege({ rolePrivileges: [] })); // 先清空store中的缓存
        http.request("/api/rolePrivilege/" + role.id, { method: 'GET' },
            data => {
                dispatch(updateRolePrivilege({ rolePrivileges: data.data }));
                if(callback) callback.call();
            });
    }
};