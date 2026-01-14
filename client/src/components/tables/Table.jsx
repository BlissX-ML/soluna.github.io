import classes from './Table.module.scss'

export default function Table({ th, td, ...props }) {
    return (
        <tr className={classes.rows} {...props}>
            <th>{th}</th>
            <td>{td}</td>
        </tr>
    )
}