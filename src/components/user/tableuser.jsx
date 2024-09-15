import { EditOutlined } from "@ant-design/icons";
import { Table } from "antd";
import ModalUpdateUser from "./modalUpdateUser";
import { useState } from "react";
import ViewDetailUser from "./viewDetailUser";
import DeleteUser from "./deleteUser";

function TableUser({
    dataUsers,
    loadUser,
    current,
    pageSize,
    total,
    setCurrent,
    setPageSize,
}) {
    const [isModalUpdateOpen, setIsModalUpdateOpen] = useState(false);
    const [dataUpdate, setDataUpdate] = useState(null);
    const [detailUser, setDetailUser] = useState(null);
    const [isDetailOpen, setIsDetailOpen] = useState(false);
    const columns = [
        {
            title: "STT",
            render: (_, record, index) => {
                return <>{index + 1 + (current - 1) * pageSize}</>;
            },
        },

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
                    <DeleteUser loadUser={loadUser} dataDelete={record} />
                </div>
            ),
        },
    ];
    const onChange = (pagination, filters, sorter, extra) => {
        console.log(">>> check ", { pagination, filters, sorter, extra });
        if (+current !== +pagination.current) {
            setCurrent(+pagination.current);
        }
        if (+pageSize !== +pagination.pageSize) {
            setPageSize(+pagination.pageSize);
        }
    };

    return (
        <>
            <Table
                columns={columns}
                dataSource={dataUsers}
                rowKey="_id"
                pagination={{
                    current: current,
                    pageSize: pageSize,
                    showSizeChanger: true,
                    total: total,
                    showTotal: (total, range) => {
                        return (
                            <div>
                                {" "}
                                {range[0]}-{range[1]} trên {total} rows
                            </div>
                        );
                    },
                }}
                onChange={onChange}
            />
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
