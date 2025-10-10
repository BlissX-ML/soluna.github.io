import classes from './Table.module.scss'

export default function Table({ th, td }) {
    return (
        <tr className={classes.rows}>
            <th>{th}</th>
            <td>{td}</td>
        </tr>
    )
}