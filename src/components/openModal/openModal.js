import React from "react";
import { orange } from '@mui/material/colors';
import Checkbox from '@mui/material/Checkbox';
import { useState } from "react";
import { dbService } from "./firebase.js";
import "../../static/fonts/font.css";
import './reset.css';
import './openModal.css';
import close from '../../static/img/Close.svg';

const OpenModal = ({ modalClose }) => {

  const onCloseModal = e => {
    if (e.target === e.currentTarget) {
      modalClose();
    }
  }

  const [name, setName] = useState("");
  const [phonenumber, setPhonenumber] = useState("");
  const [email, setEmail] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    await dbService.collection("FlowayUserInfo").add({
      name,
      phonenumber,
      email
    });
    setName("");
    setPhonenumber("");
    setEmail("");
  }
  const onChange = (event) => {
    const {
      target: { value }
    } = event;
    setName(value);
  };

  const onChange1 = (event) => {
    const {
      target: { value }
    } = event;
    setPhonenumber(value);
  };

  const onChange2 = (event) => {
    const {
      target: { value }
    } = event;
    setEmail(value);
  };



  const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

  return (
    <div className="body">
      <article className="modal on">
        <h2 className="txt-hide">모달창</h2>
        <section className="cont-form-login">
          <p className="txt-form">꽃 구매 서비스는 현재 준비 중에 있어요.🥺
            <br />꽃 시장의 꽃을 온라인으로 구매하실 수 있도록 준비 중이니,<br />구매 서비스 오픈 알림을 신청하고 사전 예약 혜택을
            받아 가세요!
          </p>
          {/*  폼시작 */}
          <form className="form-login" onSubmit={onSubmit}>
            {/* 이름,전화번호 묶음  */}
            <div className="box">
              <div className="input-box">
                <p className="name">이름</p>
                <label for="inp_name" className="txt-hide">이름</label>
                <input
                  className="inp name"
                  id="inp_name"
                  value={name}
                  onChange={onChange}
                  type="text"
                  placeholder="이름" />
              </div>

              <div className="input-box">
                <p className="name">전화번호</p>
                <label for="inp_tel" className="txt-hide">전화번호</label>
                <input
                  className="inp tel"
                  id="inp_tel"
                  value={phonenumber}
                  onChange={onChange1}
                  type="text"
                  placeholder="전화번호" />
              </div>


            </div>
            {/* 이메일 묶음 */}
            <div className="input-box email">
              <p className="name">이메일</p>
              <label for="inp_mail" className="txt-hide">전화번호</label>
              <input
                className="inp"
                id="inp_mail"
                value={email}
                onChange={onChange2}
                type="text"
                placeholder="이메일" />
              <strong className="inp-error">서비스 오픈 알림이 문자와 이메일로 발송되오니 정확한 정보를 입력해 주세요.</strong>
            </div>
            {/* 수신동의 */}
            <div className="apply-form">
              <label for="inpHold" className="labl-hold">서비스 알림 안내를 위한 개인정보 처리방침과 마케팅 정보 수신에 동의합니다.</label>
              {/* <input
                type="checkbox"
                id="inpHold"
                className="inp-hold" /> */}
              <Checkbox
                type="checkbox"
                id="inpHold"
                className="inp-hold"
                {...label}
                defaultChecked
                sx={{
                  color: orange[300],
                  '&.Mui-checked': {
                    color: orange[600],
                  },
                }}

              />
              <label
                for="inpHold"
                className="agree">수신동의</label>
            </div>
            {/* 버튼 */}
            <input type="submit" className="btn-apply" value="구매 서비스 오픈 알림 신청하기" />
            <div className="bottom-button">
              <button type="button" className="btn-share">공유하기</button>
              <button type="button" className="btn-search">꽃 검색하기</button>
            </div>
            <div className="bottom-txt">
              <p>주변 플로리스트에게 플로웨이를 소개해 보세요!</p>
              <p>꽃을 검색하고 꽃 시장 정보를 확인해 보세요!</p>
            </div>
            <button type="button" className="btn-close"
            >
              <img src={close} alt="모달창 닫기" onClick={onCloseModal} /></button>
          </form>
        </section>
      </article>
    </div>
  );
};

export default OpenModal;