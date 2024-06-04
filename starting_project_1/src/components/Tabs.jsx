export default function Tabs({ children, buttons, ButtonsConatiner = "menu" }) {
  // const ButtonsConatiner = buttonsContainer
  return (
    <>
      <ButtonsConatiner>{buttons}</ButtonsConatiner>
      {children}
    </>
  );
}
