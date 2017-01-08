/**
 * Created by seven sins on 1/7/2017.
 */
const initialState = [
    {
        id: 1,
        userName: "seven sins",
        passWord: "123456",
        nickName: "七原罪",
        email: "10000@qq.com",
        status: 0,
        phoneNumber: "18866669999"
    },
    {
        id: 2,
        userName: "seven sins",
        passWord: "123456",
        nickName: "七原罪",
        email: "10000@qq.com",
        status: 1,
        phoneNumber: "18866669999"
    },
    {
        id: 3,
        userName: "seven sins",
        passWord: "123456",
        nickName: "七原罪",
        email: "10000@qq.com",
        status: 0,
        phoneNumber: "18866669999"
    }
];
const List = (state = initialState, action = null) => {
    switch (action.type) {
        case 'LOADDATA':
            return {
                ...state,
                list: action.list
            };
        default:
            return state
    }
};
export default List;
