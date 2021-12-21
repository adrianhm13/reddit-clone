import {
  ModalMain,
  ModalLeftContent,
  ModalRightContent,
  ModalContent,
  InputsSign,
  Divider
} from "../Modal/Modal.style";
import { Button } from "../button/Button";
import { Input } from "../Input/Input";
export default function Modal({setShowModal}) {
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
          <h3>Login</h3>
          <Divider>
            <hr /> Or <hr />
          </Divider>

          <InputsSign>
            <form>
              <label>
                <Input type="email" placeholder="Email"></Input>
              </label>
              <label>
                <Input type="password" placeholder="Password"></Input>
              </label>
              <Button outline w100 mt1>
                Login
              </Button>
            </form>
          </InputsSign>
        </ModalRightContent>
      </ModalContent>
    </ModalMain>
  );
}
