import { useEffect, useState } from "react";
import TableUser from "../components/user/tableuser";
import UserForm from "../components/user/userform";
import { fetchAllUserAPI } from "../services/apiService";

function UserPage() {
    const [dataUsers, setDataUsers] = useState([]);
    const [current, setCurrent] = useState(1);
    const [pageSize, setPageSize] = useState(5);
    const [total, setTotal] = useState(0);
    useEffect(() => {
        loadUser();
    }, [current, pageSize]);
    const loadUser = async () => {
        const res = await fetchAllUserAPI(current, pageSize);
        if (res.data) {
            setDataUsers(res.data.result);
            setCurrent(res.data.meta.current);
            setPageSize(res.data.meta.pageSize);
            setTotal(res.data.meta.total);
        }
    };
    return (
        <div>
            <div>
                <UserForm loadUser={loadUser} />
                <TableUser
                    dataUsers={dataUsers}
                    loadUser={loadUser}
                    current={current}
                    pageSize={pageSize}
                    total={total}
                    setCurrent={setCurrent}
                    setPageSize={setPageSize}
                />
            </div>
        </div>
    );
}

export default UserPage;
