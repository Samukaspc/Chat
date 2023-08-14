import { Center, CenterGrid, ConponentCenter, Daschebord, EndTop, MenuLateral, StartTop, Status, TopBar } from "./styled";
import { Avatar, Card, Col, Menu, MenuProps, Row, Statistic, Upload, UploadProps, message } from 'antd';
import { ArrowUpOutlined, ArrowDownOutlined } from '@ant-design/icons';
import { UploadOutlined } from '@ant-design/icons';
import Input from 'antd/lib/input/Input'
import Button from 'antd/lib/button/button'
import Modal from 'antd/lib/modal/Modal'
import React, { useState } from 'react';
import TextArea from "antd/es/input/TextArea";
import { RcFile } from "antd/es/upload";
import type { UploadFile } from 'antd/es/upload/interface';
import { PlusOutlined } from '@ant-design/icons';
import chatBot4 from '../../image/chatBot5.png';


import {
    LoginOutlined,
    RobotOutlined,
    UserOutlined,
    PauseOutlined,
    PlayCircleOutlined,
    EyeOutlined,
} from '@ant-design/icons';
export default function Dascheboard() {

    type MenuItem = Required<MenuProps>['items'][number];

    function getItem(
        label: React.ReactNode,
        key: React.Key,
        icon?: React.ReactNode,
        children?: MenuItem[],
        type?: 'group',
    ): MenuItem {
        return {
            key,
            icon,
            children,
            label,
            type,
        } as MenuItem;
    }

    const items: MenuItem[] = [
        getItem('ChatBot', '1', <RobotOutlined />),
        getItem('Perfil', '1', <UserOutlined />),
        getItem('Deslogar', '1', <LoginOutlined />),
    ];

    const [previewOpen, setPreviewOpen] = useState(false);
    const [previewImage, setPreviewImage] = useState('');
    const [previewTitle, setPreviewTitle] = useState('');

    const getBase64 = (file: RcFile): Promise<string> =>
        new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => resolve(reader.result as string);
            reader.onerror = (error) => reject(error);
        });



    const handlePreview = async (file: UploadFile) => {
        if (!file.url && !file.preview) {
            file.preview = await getBase64(file.originFileObj as RcFile);
        }

        setPreviewImage(file.url || (file.preview as string));
        setPreviewOpen(true);
        setPreviewTitle(file.name || file.url!.substring(file.url!.lastIndexOf('/') + 1));
    };


    const handleChange: UploadProps['onChange'] = ({ fileList: newFileList }) =>
        setFileList(newFileList);

    const uploadButton = (
        <div>
            <PlusOutlined />
            <div style={{ marginTop: 8 }}>Imagem</div>
        </div>
    );

    const [fileList, setFileList] = useState<UploadFile[]>([
        {
            uid: '-1',
            name: 'image.png',
            status: 'done',
            url: 'https://media.licdn.com/dms/image/D4D0BAQHZ4gNbiPuQUg/company-logo_200_200/0/1666998514925?e=2147483647&v=beta&t=trQxS8RvHw44dH3axU0kXjgBBGoDFD1HVVT5gXMynPY',
        },
    ]);

    const [isModalOpen, setIsModalOpen] = useState(false);

    const props: UploadProps = {
        name: 'file',
        action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
        headers: {
            authorization: 'authorization-text',
        },
        onChange(info) {
            if (info.file.status !== 'uploading') {
                console.log(info.file, info.fileList);
            }
            if (info.file.status === 'done') {
                message.success(`${info.file.name} file uploaded successfully`);
            } else if (info.file.status === 'error') {
                message.error(`${info.file.name} file upload failed.`);
            }
        },
    };


    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleOk = () => {
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };
    return (
        <>
            <TopBar>
                <StartTop>
                    <img src={chatBot4} alt="Logo" />
                    <h1>ChatBot</h1>
                </StartTop>
                <EndTop>
                    <Avatar size={50} icon={<UserOutlined />} />
                </EndTop>
            </TopBar>
            <Status>
                <MenuLateral>
                    <div style={{ width: '100%' }}>
                        <Menu
                            mode="inline"
                            items={items}
                        />
                    </div>
                </MenuLateral>
                <ConponentCenter>
                    <div style={{ width: '96%' }} >
                        <Daschebord>
                            <h1>Status</h1>
                            <Row gutter={16} style={{ justifyContent: 'center' }}>
                                <Col span={5}>
                                    <Card bordered={false} style={{ boxShadow: '0 0 2px black' }} >
                                        <Statistic
                                            title="Concluidos"
                                            value={300}
                                            precision={2}
                                            valueStyle={{ color: '#3f8600' }}
                                            prefix={<ArrowUpOutlined />}
                                            style={{ fontWeight: 'bold' }}
                                        />
                                    </Card>
                                </Col>
                                <Col span={5}>
                                    <Card bordered={false} style={{ boxShadow: '0 0 2px black' }} >
                                        <Statistic
                                            title="Enviando..."
                                            value={5}
                                            precision={2}
                                            valueStyle={{ color: '#FFA500' }}
                                            prefix={<ArrowDownOutlined />}
                                            style={{ fontWeight: 'bold' }}

                                        />
                                    </Card>
                                </Col>
                                <Col span={5}>
                                    <Card bordered={false} style={{ boxShadow: '0 0 2px black' }} >
                                        <Statistic
                                            title="Falha"
                                            value={11}
                                            precision={2}
                                            valueStyle={{ color: 'red' }}
                                            prefix={<ArrowUpOutlined />}
                                            style={{ fontWeight: 'bold' }}

                                        />
                                    </Card>
                                </Col>
                                <Col span={5}>
                                    <Card bordered={false} style={{ boxShadow: '0 0 2px black' }} >
                                        <Statistic
                                            title="Total"
                                            value={500}
                                            precision={2}
                                            valueStyle={{ color: 'blue' }}
                                            style={{ fontWeight: 'bold' }}
                                        />
                                    </Card>
                                </Col>
                            </Row>
                        </Daschebord>
                        <Daschebord>
                            <div style={{ display: "flex" }} >

                                <CenterGrid>
                                    <h2>Informe o Contato</h2>

                                    <label>Nome:</label>
                                    <Input placeholder="Nome" ></Input>
                                    <label>Número: </label>
                                    <Input placeholder="Número" ></Input>
                                    <Center>
                                        <Button type="primary" style={{ backgroundColor: 'green', width: '100px', height: '50px' }} >Adicionar</Button>
                                    </Center>
                                </CenterGrid>
                                <CenterGrid>
                                    <Upload {...props} >
                                            <h2>Enviar Arquivo</h2>
                                        <Button style={{ marginBlock: '20px', color: 'black', width: '160px', height: '50px', backgroundColor: '#d3d3d3', boxShadow: '0 0 2px black' }} icon={<UploadOutlined />}>Adicione Excel</Button>
                                        <br/>
                                    </Upload>
                                        <Button style={{ width: '160px', height: '50px', boxShadow: '0 0 2px black' }} icon={<EyeOutlined />} type="primary" onClick={showModal}>
                                            Vizualizar Excel
                                        </Button>
                                </CenterGrid>
                            </div>

                        </Daschebord>
                        <Modal title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                            <p>Some contents...</p>
                        </Modal>
                        <Daschebord>
                            <h2>Monte sua mensagem</h2>
                            <p>Monte a mensagem</p>
                            <TextArea rows={4} style={{ marginBottom: '20px' }} />
                            <>
                                <Upload
                                    action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                                    listType="picture-card"
                                    fileList={fileList}
                                    onPreview={handlePreview}
                                    onChange={handleChange}
                                >
                                    {fileList.length >= 5 ? null : uploadButton}
                                </Upload>
                                <Modal open={previewOpen} title={previewTitle} footer={null} onCancel={handleCancel}>
                                    <img alt="example" style={{ width: '100%' }} src={previewImage} />
                                </Modal>
                            </>

                            <Center>
                                <Button icon={<PlayCircleOutlined />} style={{ width: 150, height: 70, backgroundColor: 'green', color: 'black', fontWeight: 'bold' }}  >Iniciar</Button>
                                <Button icon={<PauseOutlined />} style={{ width: 150, height: 70, backgroundColor: 'yellow', color: 'black', fontWeight: 'bold' }}  >Pause</Button>
                            </Center>

                        </Daschebord>
                    </div>

                </ConponentCenter>
            </Status>
        </>
    )
}