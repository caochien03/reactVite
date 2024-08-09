import { useEffect, useState } from "react";
import TableUser from "../components/user/tableuser";
import UserForm from "../components/user/userform";
import { fetchAllUserAPI } from "../services/apiService";

function UserPage() {
    const [dataUsers, setDataUsers] = useState([]);
    useEffect(() => {
        loadUser();
    }, []);
    const loadUser = async () => {
        const res = await fetchAllUserAPI();
        setDataUsers(res.data);
        // console.log("check render api");
    };
    return (
        <div>
            <div>
                <UserForm loadUser={loadUser} />
                <TableUser dataUsers={dataUsers} loadUser={loadUser} />
            </div>
        </div>
    );
}

export default UserPage;
