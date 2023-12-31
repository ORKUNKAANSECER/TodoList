import Button from "./Button";
import Card from "./Card";

const ErrorModal = (props) => {
  return (
    <div className="fixed top-1/4 left-0 flex justify-center mx-auto w-screen z-50">
        <div className="backdrop-blur-sm bg-white/30 fixed w-screen h-screen top-0" onClick={props.onConfirm}></div>
      <Card className='w-[36rem] p-0.5 z-20'>
        <header className="bg-red-700 p-3 -m-0.5 rounded-t-xl">
          <h2 className="text-center text-xl text-white">{props.error?.title}</h2>
        </header>
        <section className="p-4">{props.error?.message}</section>
        <footer className="p-4 flex justify-end">
          <Button className="w-32" onClick={props.onConfirm}>Tamam</Button>
        </footer>
      </Card>
    </div>
  );
};

export default ErrorModal;
