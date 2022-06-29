import styled from "styled-components";

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.8rem 10rem;

  background-color: #21212150;

  backdrop-filter: blur(6px);

  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  z-index: 1000;

  nav {
    display: flex;
    align-items: center;
    gap: 1.8rem;
    a {
      color: #ffff;
      padding: 0.6rem;
      font-family: "Red Hat Display", sans-serif;
      font-weight: 500;
      text-transform: uppercase;
      transition: filter 0.25s;

      &.button {
        padding: 0.6rem 5rem;
      }

      &:hover {
        filter: brightness(0.6);
      }
    }
  }

  .menu-container {
    cursor: pointer;
    padding: 0.6rem 0;
  }

  .menu {
    width: 2rem;
    height: 0.2rem;
    background: #ffff;
    position: relative;
    cursor: pointer;
    display: none;

    &:before {
      bottom: 0.5rem;
    }
    &:after {
      top: 0.5rem;
    }

    &.active:before {
      bottom: 0;
      transform: rotate(45deg);
    }

    &.active:after {
      top: 0;
      transform: rotate(135deg);
    }

    &.active {
      background-color: rgba(0, 0, 0, 0);
    }
  }

  .menu:before,
  .menu:after {
    content: "";
    display: block;
    position: absolute;
    width: 100%;
    height: 0.2rem;
    background: #ffff;
    cursor: pointer;
    transition: 0.6s;
  }

  input[type="checkbox"] {
    height: 0;
    width: 0;
    visibility: hidden;
    outline: none;
  }

  label {
    cursor: pointer;
    text-indent: -9999px;
    width: 55px;
    height: 30px;
    background: var(--green);
    display: block;
    justify-content: center;
    align-items: center;
    -webkit-border-radius: 100px;
    -moz-border-radius: 100px;
    border-radius: 100px;
    position: relative;
    margin-left: auto;
    right: 10px;
  }

  @media only screen and (max-width: 800px) {
    label {
      position: relative;
    }
  }

  label:after {
    content: "";
    background: #fff;
    width: 20px;
    height: 20px;
    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    border-radius: 50%;
    position: absolute;
    top: 5px;
    left: 4px;
    transition: cubic-bezier(0.68, -0.55, 0.27, 01.55) 320ms;
  }

  input:checked + label {
    background: var(--pink);
  }

  input:checked + label:after {
    left: calc(100% - 5px);
    -webkit-transform: translateX(-100%);
    -moz-transform: translateX(-100%);
    -ms-transform: translateX(-100%);
    -o-transform: translateX(-100%);
    transform: translateX(-100%);
  }

  @media (max-width: 960px) {
    padding: 1.8rem 3rem;

    .menu {
      display: block;
    }

    nav {
      -ms-overflow-style: none;
      scrollbar-width: none;
      overflow: hidden;
      opacity: 0;
      visibility: hidden;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      position: fixed;
      width: 100vw;
      height: 100vh;
      background: var(--blue);
      top: 0;
      left: 0;
      transition: opacity 0.25s;
      background-color: var(--green);

      a.button {
        background-color: var(--pink);
      }

      &.active {
        opacity: 1;
        visibility: visible;
      }
    }
  }
`;

export const DropDown = styled.div`
  cursor: pointer;
  color: #fff;
  text-transform: uppercase;
  padding: 10px 0;
  .dropbtn {
    color: #ffff;
    padding: 0.6rem 0.8rem;
    font-family: "Red Hat Display", sans-serif;
    font-weight: 500;
    text-transform: uppercase;
    transition: filter 0.25s;
    width: auto;
  }

  .dropdown {
    position: relative;
    display: inline-block;
  }

  .dropdown-content {
    display: none;
    position: absolute;
    background-color: #3e8e41;
    min-width: 160px;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
    z-index: 1;
    margin-top: 10px;
    border-radius: 10px;
    text-align: center;
    max-height: 200px;
    overflow-y: auto;
 

  }

  .dropdown-content a {
    color: black;
    padding: 12px 16px;
    text-decoration: none;
    display: block;
  }

  .dropdown-content a:hover {
    background-color: #f1f1f1;
  }

  .dropdown:hover .dropdown-content {
    display: block;
  }

  .dropdown:hover .dropbtn {
    background-color: #3e8e41;
  }
`;

