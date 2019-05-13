import React from 'react';

/**
 * Pravachans list component
 */
class Pravachans extends React.Component {

    componentWillMount = () => {
        this.props.getPravachans();
    }

    render() {
        const { pravachans } = this.props.pravachans;

        return (
            <React.Fragment>
                <table style={{border:'solid 1px'}}>
                    <tr >
                        <th style={{border:'solid 1px'}}>Name</th>
                        <th style={{border:'solid 1px'}}>Size</th>
                        <th style={{border:'solid 1px'}}>Download</th>
                    </tr>
                    <tbody>
                        {pravachans.map((pravachan, index) => {
                            return (<tr><td style={{border:'solid 1px'}}>{pravachan.name}</td>
                                <td style={{border:'solid 1px'}}>{pravachan.size}</td>
                                <td style={{border:'solid 1px'}}><button>Download</button></td></tr>)
                        })}
                    </tbody>
                </table>

            </React.Fragment>
        );

    }
}

export default Pravachans;