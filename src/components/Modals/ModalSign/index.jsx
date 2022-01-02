import * as Styled from "./style";
import LoginForm from "../../Login";
import SignupForm from "../../Signup";

export default function ModalSign({ setModal, action }) {
  return (
    <Styled.ModalMain>
      <Styled.ModalContent>
        <Styled.ModalLeftContent>
          <img
            src="https://www.redditstatic.com/accountmanager/bbb584033aa89e39bad69436c504c9bd.png"
            alt="SignIn"
          />
        </Styled.ModalLeftContent>
        <Styled.ModalRightContent>
          <i className="far fa-times-circle" onClick={() => setModal(false)} />
          {action === "login" ? <h3>Login</h3> : <h3>Signup</h3>}
          <Styled.Divider>
            <hr /> Or <hr />
          </Styled.Divider>
          <Styled.InputsSign>
            {action === "login" ? (
              <LoginForm setModal={setModal} />
            ) : (
              <SignupForm setModal={setModal} />
            )}
          </Styled.InputsSign>
        </Styled.ModalRightContent>
      </Styled.ModalContent>
    </Styled.ModalMain>
  );
}
