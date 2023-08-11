import { ConponentCenter, Daschebord, MenuLateral, Status, TopBar } from "./styled";
import { Card, Col, Row, Statistic } from 'antd';
import { ArrowUpOutlined, ArrowDownOutlined } from '@ant-design/icons';
import Input from 'antd/lib/input/Input'
import Button from 'antd/lib/button/button'
import Modal from 'antd/lib/modal/Modal'
import LogoBot from '../../image/logoBot3.png'
import React, { useState } from 'react';
export default function Dascheboard() {

    const [isModalOpen, setIsModalOpen] = useState(false);

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
                    <img src={LogoBot} alt="Logo" width={80} height={80} />
            </TopBar>
            <Status>
                <MenuLateral>
                </MenuLateral>
                <ConponentCenter>
                    <div style={{ width: '95%' }} >
                        <Daschebord>
                            <h1>Status</h1>
                            <Row gutter={16}>
                                <Col span={5}>
                                    <Card bordered={false}>
                                        <Statistic
                                            title="Concluidos"
                                            value={11.28}
                                            precision={2}
                                            valueStyle={{ color: '#3f8600' }}
                                            prefix={<ArrowUpOutlined />}
                                            style={{ fontWeight: 'bold' }}
                                        />
                                    </Card>
                                </Col>
                                <Col span={5}>
                                    <Card bordered={false}>
                                        <Statistic
                                            title="Enviando..."
                                            value={9.3}
                                            precision={2}
                                            valueStyle={{ color: '#FFA500' }}
                                            prefix={<ArrowDownOutlined />}
                                            style={{ fontWeight: 'bold' }}

                                        />
                                    </Card>
                                </Col>
                                <Col span={5}>
                                    <Card bordered={false}>
                                        <Statistic
                                            title="Falha"
                                            value={11.28}
                                            precision={2}
                                            valueStyle={{ color: 'red' }}
                                            prefix={<ArrowUpOutlined />}
                                            style={{ fontWeight: 'bold' }}

                                        />
                                    </Card>
                                </Col>
                                <Col span={5}>
                                    <Card bordered={false}>
                                        <Statistic
                                            title="Total"
                                            value={9.3}
                                            precision={2}
                                            valueStyle={{ color: 'blue' }}
                                            style={{ fontWeight: 'bold' }}
                                            suffix="%"
                                        />
                                    </Card>
                                </Col>
                            </Row>
                        </Daschebord>
                        <Daschebord>
                            <h2>Informe o Contato</h2>
                            <span>Nome: </span>
                            <Input placeholder="Nome" ></Input>
                            <span>Número: </span>
                            <Input placeholder="Número" ></Input>
                            <Button type="primary" >Adicionar</Button>
                            <Button type="primary" onClick={showModal}>
                                Vizualizar
                            </Button>
                        </Daschebord>
                        <Modal title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                            <p>Some contents...</p>
                        </Modal>
                        <Daschebord>
                            Enviar arquivo
                            </Daschebord>
                    </div>

                </ConponentCenter>
            </Status>
        </>
    )
}