import {
  ModalMain,
  ModalLeftContent,
  ModalRightContent,
  ModalContent,
  InputsSign,
  Divider,
} from "../Modal/Modal.style";
import LoginForm from "../Login/LoginForm";
import SignupForm from "../Signup/SignupForm";

export default function Modal({ setShowModal, action }) {
  return (
    <ModalMain>
      <ModalContent>
        <ModalLeftContent>
          <img
            src="https://www.redditstatic.com/accountmanager/bbb584033aa89e39bad69436c504c9bd.png"
            alt="Login"
          />
        </ModalLeftContent>
        <ModalRightContent>
          <i
            className="far fa-times-circle"
            onClick={() => {
              setShowModal(false);
            }}
          ></i>
          {action === "login" ? <h3>Login</h3> : <h3>Signup</h3>}
          <Divider>
            <hr /> Or <hr />
          </Divider>

          <InputsSign>
            {action === "login" ? <LoginForm setShowModal={setShowModal}/> : <SignupForm setShowModal={setShowModal}/>}
          </InputsSign>
        </ModalRightContent>
      </ModalContent>
    </ModalMain>
  );
}
