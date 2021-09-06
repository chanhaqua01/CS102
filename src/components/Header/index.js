import React from "react";
import {
  Navbar,
  Container,
  Dropdown,
  InputGroup,
  MenuItem,
  FormControl,
  Image,
} from "react-bootstrap";
import { useStoreActions, useStoreState } from "easy-peasy";

import "./style.css";
import profile from "./Profile.png";

function Header() {
  const isLoggedIn = useStoreState((state) => state.auth.isLoggedIn);
  const logout = useStoreActions((actions) => actions.auth.logout);

  const onLogoutClick = () => {
    logout();
  };

  const onTopicManagementClick = () => {
    /* do something */
  };

  const onMyProfileClick = () => {
    /* do something */
  };

  return (
    <div>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <InputGroup className="tim-kiem">
            <FormControl
              placeholder="Tìm kiếm"
              aria-label="search-string"
              aria-describedby="basic-addon1"
            />
          </InputGroup>
          {isLoggedIn && <div className="welcome-user">Hi, thangtn10</div>}

          {isLoggedIn && (
            <div>
              <Dropdown>
                <Dropdown.Toggle variant="link" className="dropdown-toggle">
                  {/* <i class="bi bi-gear-fill fs-5"></i> */}
                  <Image src={profile} roundedCircle className="profile" />
                </Dropdown.Toggle>
                <Dropdown.Menu className="shadow">
                  <Dropdown.Item onClick={onTopicManagementClick}>
                    <i class="bi bi-power fs-6 me-2"></i>
                    <span>Quản lý chủ đề</span>
                  </Dropdown.Item>
                  <Dropdown.Item onClick={onMyProfileClick}>
                    <i class="bi bi-power fs-6 me-2"></i>
                    <span>Hồ sơ của tôi</span>
                  </Dropdown.Item>
                  <Dropdown.Item onClick={onLogoutClick}>
                    <i class="bi bi-power fs-6 me-2"></i>
                    <span>Đăng xuất</span>
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
          )}
        </Container>
      </Navbar>
      <Navbar bg="light" variant="light" expand="lg">
        <Navbar.Brand className="navbar-brand">
          Chào mừng đến với Trivia Game - Thử thách trí tuệ của bạn
        </Navbar.Brand>
      </Navbar>
    </div>
  );
}

export default Header;
