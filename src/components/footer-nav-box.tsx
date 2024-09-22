import { Link } from "react-router-dom";

interface MyProps {
    children: React.ReactNode,
    title: string,
    routerPage: string
}

const FooterNavBox = ( props: MyProps ) => {
  return (
    <Link to={'/' + props.routerPage}>
        <div className="w-[150px] h-[170px] bg-white rounded-lg shadow-md flex flex-col p-6">
            <h3 className="text-center">{props.title}</h3>
            <div>{props.children}</div>
        </div>
    </Link>
  );
};
export default FooterNavBox;