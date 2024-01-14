import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
function Search(){
    return(
        <form className="searchForm">
            <input type="text" placeholder="Search Product..."/>
            <select>
                <option>
                    Select Brand
                </option>
                <option>
                    Samsung
                </option>
                <option>
                    Nokia
                </option>
                <option>
                    Motorola
                </option>
                <option>
                    Xaomi
                </option>
                <option>
                    Realme
                </option>
            </select>
            <button type="submit" className="searchButton"><FontAwesomeIcon icon={faMagnifyingGlass} style={{fontSize:'20px'}} /></button>
        </form>
    )

}
export default Search;