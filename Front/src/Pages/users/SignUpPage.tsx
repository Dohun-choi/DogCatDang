import { useState } from "react";
import styled from "styled-components";

const SignUpForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  .box {
    display: flex;
    gap: 1rem;
    align-items: center;
    .item {
      text-align: right;
      width: 11rem;
      white-space: nowrap;
      font-size: 25px;
    }
    .input {
      font-size: 22px;
      border: none;
      box-shadow: 0 3.5px 3.5px lightgrey;
      border-radius: 5px;
    }
  }

  button {
    border: none;
    font-size: 20px;
    border-radius: 5px;
    background-color: #F7EDE1;
  }
`

function SignUpPage() {
  const [isOrg, setIsOrg] = useState(false);

  const selectType = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsOrg(() => e.target.value === '기관'  ? true : false)
  }

  return (
    <div>
      <img src="/src/assets/auth-image.png" alt="" />
      <h3>회원가입</h3>
      <SignUpForm>
        <div className="box">
          <label className="item" htmlFor="isOrg">회원 구분</label>
          <div>
            <input type="radio" name="isOrg" value="개인" id="개인" onChange={selectType} defaultChecked />
            <label htmlFor="개인">개인 회원</label>
          </div>
          <div>
            <input type="radio" name="isOrg" value="기관" id="기관" onChange={selectType} />
            <label htmlFor="기관">기관 회원</label>
          </div>
        </div>
        <div className="box">
          <label className="item" htmlFor="username">ID</label>
          <input className="input" type="text" id="username" name="username" />
          <button>중복확인</button>
        </div>
        <div className="box">
          <label className="item" htmlFor="nickname">{ isOrg ? '기관명' : '닉네임' }</label>
          <input className="input" type="text" id="nickname" name="nickname" />
          <button>중복확인</button>
        </div>
        <div className="box">
          <label className="item" htmlFor="password1">비밀번호</label>
          <input className="input" type="password" id="password1" name="password1" />
        </div>
        <div className="box">
          <label className="item" htmlFor="password2">비밀번호 확인</label>
          <input className="input" type="password" id="password2" name="password2" />
        </div>
        <div className="box">
          <label className="item" htmlFor="email">이메일</label>
          <input className="input" type="email" id="email" name="email" />
        </div>
        <div className="box">
          <label className="item" htmlFor="phone-number">전화번호</label>
          <input className="input" type="text" id="phone-number" name="phone-number" />
        </div>
        <div className="box">
          <label className="item" htmlFor="address">주소</label>
          <input className="input" type="text" id="address" name="address" />
        </div>
        <button>회원가입</button>
      </SignUpForm>
    </div>
  );
}

export default SignUpPage;