
const SelectGroup = ({ context, getValue }) => {
    let result = []
    const getAllData = (data) => {
        Object.values(data).map(el => {
            if (Array.isArray(el)) {
                el.map(ctx => getAllData(ctx))
            } else {
                result.push({
                    body: data['body'],
                    id: data['id']
                })
            }
        })
        return [...new Set(result.map(item => JSON.stringify(item)))].map(item => JSON.parse(item));
    }
    return (
        <select
            id='parentItem'
            className='form-control'
            onChange={(event) => getValue(event, "select")}
        >
            <option style={{ fontWeight: "bolder", marginLeft: "50px" }}>請下拉選擇項目</option>
            {getAllData(context).map(el => <option value={el['id']} key={el['id']}>{el['body']}</option>)}
        </select>
    )
}
export default SelectGroup;