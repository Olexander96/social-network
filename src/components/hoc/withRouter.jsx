import { useParams } from "react-router-dom";

export function withRouter(Component) {//для запису параметрыв з URL
    function ComponentWithRouterProp(props) {

        let params = useParams();
        return <Component {...props} params = { params }/>;
    }
    return ComponentWithRouterProp;
}