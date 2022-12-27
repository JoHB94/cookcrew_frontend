import axios from 'axios';
import {Form, Label, Input, Button, Col, FormGroup
    , Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap';
import{useState} from 'react';
import DaumPostcode from 'react-daum-postcode';


export default function Join() {
    const divStyle = {
        width: '1200px' //캘린더 width 조절을 위해 부모태그에 설정한다.
        , height: '780px'
        , textAlign: 'center'
        , margin: '100px auto'
        , marginBottom: '20px'
        // , border: '0.5px solid gray'
        , padding: '30px'
        // , borderRadius: '20px'
        , top: '100'
    };
    const [modalShow, setModalShow] = useState(false);
    const modalToggle = () => {
        setModalShow(!modalShow)
    }
    const [address, setAddress] = useState("");
    const [postcode, setPostcode] = useState("")
    const addressHandle={
        selectAddress:(data)=>{
            setAddress(data.address);
            setPostcode(data.zonecode);
            setModalShow(false)
        }
    }
    return(
        <div style={divStyle}>
                <div><h1><b>회원가입</b></h1></div><br />
                <div style={{
                        width: '500px'
                        , height: '555px'
                        , margin: '0px auto'
                        , border: '0.5px solid gray'
                        , padding: '30px'
                        , borderRadius: '20px'
                    }}>
               <Form style={{width:"400px", margin: '0px auto'}}>
                    <FormGroup row>
                            <Label htmlFor='nickname' sm={4}>닉&nbsp;&nbsp;네&nbsp;&nbsp;임</Label>
                            <Col sm={8}>
                                <Input type='text' name='nickname' id='nickname' required/>
                            </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label htmlFor="id" sm={4}>아&nbsp;&nbsp;이&nbsp;&nbsp;디</Label>
                        <Col sm={4}>
                            <Input type="text" name="id" id="id" onChange required/>
                        </Col>
                        <Col sm={4}>
                            <Button outline color='secondary' style={{width:'100%'}} onClick>중복확인</Button>
                        </Col>
                    </FormGroup>
                    {/* 패스워드 */}
                    <FormGroup row>
                            <Label htmlFor='grade' sm={4}>패스워드</Label>
                            <Col>
                            <Input type="password" name="password" id="password" sm={8} required/>
                            </Col>
                    </FormGroup>
                    {/* 비밀번호 재확인 */}
                    <FormGroup row>
                            <Label htmlFor='grade' sm={4}>재&nbsp;&nbsp;확&nbsp;&nbsp;인</Label>
                            <Col>
                                <Input type="password" name="password" id="password" sm={8}  required/>
                                <span style={{color:"red"}}>비밀번호가 일치하지않습니다!</span>
                            </Col>
                    </FormGroup>
                    {/* 이메일 */}
                    <FormGroup row>
                            <Label htmlFor='email' sm={4}>이&nbsp;&nbsp;메&nbsp;&nbsp;일</Label>
                            <Col sm={8}>
                                <Input type='email' name='email' id='email' placeholder="패스워드 재발급을 위한 이메일" required/>
                            </Col>
                    </FormGroup>
                    {/* 우편번호 */}
                    <FormGroup row>
                        <Label htmlFor="id" sm={4}>우편&nbsp;번호</Label>
                        <Col sm={4}>
                            <Input type="text" name="id" id="id" value={postcode} onClick={modalToggle} required/>
                        </Col>
                        <Col sm={4}>
                            <Button outline color='secondary' style={{width:'100%'}} onClick={modalToggle}>검색</Button>
                        </Col>
                    </FormGroup>
                    {/* 주소 */}
                    <FormGroup row>
                            <Label htmlFor='grade' sm={4}>주&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;소</Label>
                            <Col>
                            <Input type="text" name="grade" id="grade" sm={8} value={address} />
                            </Col>
                    </FormGroup>
                    {/* 상세주소 */}
                    <FormGroup row>
                            <Label htmlFor='grade' sm={4}>상세&nbsp;주소</Label>
                            <Col>
                            <Input type="text" name="grade" id="grade" sm={8} value={"없음"} required placeholder="해당하지 않을경우 없음 입력"/>
                            </Col>
                    </FormGroup>
                    <FormGroup row>
                         <Col sm={4} >
                            <Button color='secondary' style={{width:'400px'}}>회원가입</Button>
                        </Col>
                    </FormGroup>
                </Form>
                
                {/* 우편번호 검색 모달 */}
                <Modal isOpen={modalShow} fade={true} toggle={modalToggle} style={{witop:"100px", left: "28%"}}>
                        <ModalHeader toggle={modalToggle}>주소 검색</ModalHeader>
                        <ModalBody>
                            <DaumPostcode onComplete={addressHandle.selectAddress} autoClose={false} defaultQuery='가산디지털1로 2' />
                        </ModalBody>
                        <ModalFooter color="secondary" onClick={modalToggle}>
                            {/* <Button color='secondary'>닫기</Button> */}
                        </ModalFooter>
                </Modal>
                </div>
        </div>
    );
}