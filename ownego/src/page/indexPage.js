import React, { useEffect, useState } from 'react'
import { Button, Dropdown, Col, Row, Card, Checkbox } from 'antd';
import { useDispatch, useSelector } from 'react-redux'
import { GET_ALL_STORE_AND_PRODUCT_SAGA, GET_ALL_STORE_SAGA } from '../redux/type/StoreType'
import { CaretDownOutlined } from '@ant-design/icons';
import { GET_ALL_PRODUCT_SAGA } from '../redux/type/ProductType';

export default function IndexPage() {
    const dispatch = useDispatch()
    const { listStore, listStoreAndProduct } = useSelector(state => state.storeReducer)
    const { listProduct } = useSelector(state => state.productReducer)
    const [filterName, setFilterName] = useState({ name: 'Name', id: null })
    const [storeClick, setStoreClick] = useState({ id: 1 })
    const [filterTopping, setFilterTopping] = useState({ status: 0 })
    const [storeId, setStoreId] = useState({ id: null })
    const [toppingStatus, setToppingStatus] = useState({ status: false })
    const [x, setX] = useState({ status: 0 })

    useEffect(() => {
        dispatch({
            type: GET_ALL_STORE_SAGA
        })
        dispatch({
            type: GET_ALL_STORE_AND_PRODUCT_SAGA
        })
        dispatch({
            type: GET_ALL_PRODUCT_SAGA
        })
    }, [])

    useEffect(() => {
        if (toppingStatus.status === true && x.status === 0) {
            setToppingStatus({ status: false })
        } else if (toppingStatus.status === true && x.status === 1) {
            let t = []
            listStoreAndProduct.forEach(i => {
                if (i.idShop === storeClick.id) {
                    t.push(i.product)
                }
            })
            let item = listStore.find(i => { if (i.id === storeClick.id) { return i } })
            localStorage.setItem('store', JSON.stringify(item));
            localStorage.setItem('productOfStore', JSON.stringify(t))
        }
    }, [listStore, listStoreAndProduct, toppingStatus.status])

    const renderLink = () => {
        return listStore.map((item, index) => {
            return <a onClick={() => {
                setStoreClick({ id: item.id })
                let t = []
                listStoreAndProduct.forEach(i => {
                    if (i.idShop === item.id) {
                        t.push(i.product)
                    }
                })
                setStoreId({ id: item.id })
                localStorage.setItem('store', JSON.stringify(item));
                localStorage.setItem('productOfStore', JSON.stringify(t))
            }} style={{ color: 'white', fontSize: '24px', height: '65px', width: '100%', backgroundColor: '#203259', border: '0px' }} className="nav-link" aria-current="page">Store {item.id}</a>
        })
    }

    const renderItem = () => {
        return JSON.parse(localStorage.getItem('productOfStore')).map(item => {
            return <Col span={8} style={{ marginTop: '25px', marginBottom: '25px' }}>
                <Card
                    hoverable
                    style={{
                        width: '280px',
                        boxShadow: '1px 1px 1px grey',
                        textAlign: 'left',
                        paddingLeft: '10px',
                        margin: '0 auto',
                        height: '300px'
                    }}
                >
                    <p style={{ fontSize: '20px', color: '#203259', paddingTop: '0px' }}>MT-01</p>
                    <p style={{ fontSize: '20px', color: '#203259', marginTop: '-10px', paddingBottom: '10px', fontWeight: '500', borderBlockEnd: '3px #203259 solid' }}>{item.name}</p>
                    <p style={{ fontSize: '20px', color: '#203259', paddingTop: '0px', fontWeight: '500' }}>Toppings: </p>
                    <p style={{ fontSize: '18px', color: '#203259', paddingTop: '0px', marginTop: '-10px' }}>{item.toppings}</p>
                    <p style={{ fontSize: '24px', color: '#203259', paddingTop: '40px', textAlign: 'right', paddingRight: '10px', fontWeight: '700' }}>${item.price}</p>
                </Card>
            </Col>
        })
    }

    const onMenuClick = (e) => {
        let arr = JSON.parse(localStorage.getItem('productOfStore'))
        let arrName = JSON.parse(localStorage.getItem('productOfStore')).map(item => {
            return item.name
        })
        let arrPrice = JSON.parse(localStorage.getItem('productOfStore')).map(item => {
            return item.price
        })
        let res = []
        if (e.key == 1) {
            arrName.sort()
            arrName.forEach(e => {
                let j = 0
                for (let t = 0; t < arr.length; t++) {
                    if (arr[t].name == e && j == 0) {
                        res.push(arr[t])
                        j++
                    }
                }
            })
            localStorage.setItem('productOfStore', JSON.stringify(res))
            setFilterName({ ...filterName, name: 'Tên tăng dần', id: 1 })
        } else if (e.key == 2) {
            arrName.sort()
            arrName.forEach(e => {
                let j = 0
                for (let t = 0; t < arr.length; t++) {
                    if (arr[t].name == e && j == 0) {
                        res.push(arr[t])
                        j++
                    }
                }
            })
            localStorage.setItem('productOfStore', JSON.stringify(res.reverse()))
            setFilterName({ ...filterName, name: 'Tên giảm dần', id: 2 })
        } else if (e.key == 3) {
            arrPrice.sort()
            arrPrice.forEach(e => {
                let j = 0
                for (let t = 0; t < arr.length; t++) {
                    if (arr[t].price == e && j == 0) {
                        res.push(arr[t])
                        j++
                    }
                }
            })
            localStorage.setItem('productOfStore', JSON.stringify(res))
            setFilterName({ ...filterName, name: 'Giá tăng dần', id: 3 })
        } else if (e.key == 4) {
            arrPrice.sort()
            arrPrice.forEach(e => {
                let j = 0
                for (let t = 0; t < arr.length; t++) {
                    if (arr[t].price == e && j == 0) {
                        res.push(arr[t])
                        j++
                    }
                }
            })
            localStorage.setItem('productOfStore', JSON.stringify(res.reverse()))
            setFilterName({ ...filterName, name: 'Giá giảm dần', id: 4 })
        }
    };

    const items = [
        {
            key: '1',
            label: 'Tên tăng dần',
        },
        {
            key: '2',
            label: 'Tên giảm dần',
        },
        {
            key: '3',
            label: 'Giá tăng dần',
        },
        {
            key: '4',
            label: 'Giá giảm dần',
        },
    ];

    const onChangeCheckBox = (checkedValues) => {
        if (checkedValues.length === 0) {
            let t = []
            listStoreAndProduct.forEach(i => {
                if (i.idShop === storeClick.id) {
                    t.push(i.product)
                }
            })
            localStorage.setItem('productOfStore', JSON.stringify(t))
            setX({ status: 1 })
        } else {
            let arrData = []
            JSON.parse(localStorage.getItem('productOfStore')).forEach(item => {
                let t = 0
                let max = checkedValues.length
                checkedValues.forEach(i => {
                    if (item.toppings.toLowerCase().trim().includes(i.toLowerCase().trim())) {
                        t++
                    }
                })
                if (t === max) {
                    arrData.push(item)
                }
            })
            localStorage.setItem('productOfStore', JSON.stringify(arrData))
        }
        setToppingStatus({ status: true })
    };

    const renderTopping = () => {
        if (filterTopping.status === 0) {
            return <div>

            </div>
        } else {
            return <div style={{ backgroundColor: 'white', width: '89.8%', textAlign: 'left', height: '180px', margin: '0 auto', borderRadius: '5px', padding: '20px 30px' }}>
                <p style={{ fontSize: '22px', color: '#203259', fontWeight: '500' }}>Toppings:</p>
                <Checkbox.Group
                    style={{
                        width: '100%',
                    }}
                    onChange={onChangeCheckBox}
                >
                    <Row style={{
                        width: '100%',
                    }}>
                        <Col span={8}>
                            <Checkbox value="Milk foam" style={{ fontSize: '21px', color: '#203259', fontWeight: '400', paddingBottom: '13px' }}>Milk foam</Checkbox>
                        </Col>
                        <Col span={8}>
                            <Checkbox value="White pearl" style={{ fontSize: '21px', color: '#203259', fontWeight: '400', paddingBottom: '13px' }}>White pearl</Checkbox>
                        </Col>
                        <Col span={8}>
                            <Checkbox value="Pear" style={{ fontSize: '21px', color: '#203259', fontWeight: '400', paddingBottom: '13px' }}>Pear</Checkbox>
                        </Col>
                        <Col span={8}>
                            <Checkbox value="Aloe" style={{ fontSize: '21px', color: '#203259', fontWeight: '400', paddingBottom: '13px' }}>Aloe</Checkbox>
                        </Col>
                    </Row>
                </Checkbox.Group>
            </div >
        }
    }

    const renderView = () => {
        return (
            <Row>
                <Col span={5}>
                    <nav className="nav flex-column" style={{ width: '100%%', backgroundColor: '#203259', height: '713px' }}>
                        <p style={{ color: 'white', paddingTop: '30px', fontSize: '25px', fontWeight: '400', fontFamily: 'revert' }}>Milk Tea Store</p>
                        <div style={{ marginTop: '50px' }}>
                            {renderLink()}
                        </div>
                    </nav>
                </Col>
                <Col span={19}>
                    <div style={{ width: '100%', height: '713px', overflowY: 'scroll', backgroundColor: '#f5f5f5' }}>
                        <p style={{ marginTop: '40px', fontSize: '40px', color: '#203259', fontWeight: '500' }}>Store {storeId.id} Menu</p>
                        <Row style={{ marginTop: '30px' }}>
                            <Col span={1}>

                            </Col>
                            <Col span={11} style={{ textAlign: 'left', paddingLeft: '12px' }}>
                                <button onClick={() => {
                                    if (filterTopping.status === 0) {
                                        setFilterTopping({ status: 1 })
                                    } else {
                                        setFilterTopping({ status: 0 })
                                    }
                                }} style={{ backgroundColor: '#203259', width: '140px', height: '40px', borderRadius: '5px', color: 'white', fontSize: '18px' }} >Filter</button>
                            </Col>
                            <Col span={6}>

                            </Col>
                            <Col span={6} style={{ textAlign: 'left', paddingLeft: '37px' }}>
                                <p style={{ fontSize: '17px', color: '#203259', fontWeight: '500' }}>Sort By <Dropdown
                                    menu={{
                                        items,
                                        onClick: onMenuClick,
                                    }}
                                    placement="bottomLeft"
                                >
                                    <Button style={{ width: '130px', height: '38px', marginLeft: '10px', textAlign: 'center' }}>{filterName.name} <CaretDownOutlined /></Button>
                                </Dropdown></p>
                            </Col>
                        </Row>
                        {renderTopping()}
                        <Row style={{ marginTop: '40px' }}>
                            {renderItem()}
                        </Row>
                    </div>
                </Col>
            </Row>
        )
    }

    return (
        <div>
            {renderView()}
        </div>
    )
}
