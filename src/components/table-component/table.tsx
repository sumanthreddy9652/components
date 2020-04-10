import { Component, Prop, h } from '@stencil/core';

@Component({
    tag: 'rci-table',
    styleUrl: '../../Styles/global.css'
})

export class tableComponent {

    @Prop() rciClass: string;
    @Prop() rciTableData: object[]
      = [
        { '#': '1', 'firstName': 'aaa', 'LastName': 'xxx'},
        { '#': '2', 'firstName': 'bbb', 'LastName': 'yyy' }
    ];
     
    createHeaders = () => {
        var obj = this.rciTableData.length > 0 ? this.rciTableData[0] : null;
        return Object.getOwnPropertyNames(obj).map((header, Idx) => {
            return <th key={Idx}>{header}</th>
        });
    }

    createRows = () => {
        let columns = this.rciTableData.map((row, rowIdx) => {
            return <tr key={rowIdx}>
                {
                    Object.getOwnPropertyNames(row).map((header, Idx) => {
                        return <td key={Idx}>{row[header]}</td>
                    })
                }
            </tr>
        });

        return columns;

    }

    render() {
        return (
                <table class={ 'table ' + this.rciClass}>
                    <thead>
                        <tr>
                            {
                                this.createHeaders()
                            }
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.createRows()
                        }
                    </tbody>
                </table>

        );
    }
}
