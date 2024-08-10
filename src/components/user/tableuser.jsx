import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { Table } from "antd";
import ModalUpdateUser from "./modalUpdateUser";
import { useState } from "react";
import ViewDetailUser from "./viewDetailUser";

function TableUser({ dataUsers, loadUser }) {
    const [isModalUpdateOpen, setIsModalUpdateOpen] = useState(false);
    const [dataUpdate, setDataUpdate] = useState(null);
    const [detailUser, setDetailUser] = useState(null);
    const [isDetailOpen, setIsDetailOpen] = useState(false);
    const columns = [
        {
            title: "ID",
            dataIndex: "_id",
            render: (_, record) => {
                return (
                    <a
                        href="#"
                        onClick={() => {
                            setDetailUser(record);
                            setIsDetailOpen(true);
                        }}
                    >
                        {record._id}
                    </a>
                );
            },
        },
        {
            title: "FullName",
            dataIndex: "fullName",
        },
        {
            title: "Email",
            dataIndex: "email",
        },
        {
            title: "Action",
            key: "action",
            render: (_, record) => (
                <div style={{ display: "flex", gap: "20px" }}>
                    <EditOutlined
                        onClick={() => {
                            setDataUpdate(record);
                            setIsModalUpdateOpen(true);
                        }}
                        style={{ cursor: "pointer", color: "orange" }}
                    />
                    <DeleteOutlined
                        style={{ cursor: "pointer", color: "red" }}
                    />
                </div>
            ),
        },
    ];

    return (
        <>
            <Table columns={columns} dataSource={dataUsers} />
            <ModalUpdateUser
                isModalUpdateOpen={isModalUpdateOpen}
                setIsModalUpdateOpen={setIsModalUpdateOpen}
                dataUpdate={dataUpdate}
                setDataUpdate={setDataUpdate}
                loadUser={loadUser}
            />
            <ViewDetailUser
                loadUser={loadUser}
                detailUser={detailUser}
                setDetailUser={setDetailUser}
                isDetailOpen={isDetailOpen}
                setIsDetailOpen={setIsDetailOpen}
            />
        </>
    );
}

export default TableUser;
