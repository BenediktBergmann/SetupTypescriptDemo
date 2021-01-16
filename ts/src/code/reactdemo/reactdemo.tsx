import * as React from "react";
import ReactDOM from "react-dom";

export interface IReactDemoProps {
    value: string | undefined;
}

class ReactDemo extends React.Component<IReactDemoProps> {
    public render(): JSX.Element {
        return <div>React: {this.props.value}</div>;
    }
}

ReactDOM.render(<ReactDemo value="test" />, document.getElementById("reactdemoroot"));
