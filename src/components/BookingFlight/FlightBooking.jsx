import { AiOutlinePlus } from "react-icons/ai"
import { BiMap, BiTrash } from "react-icons/bi"
import { useDispatch, useSelector } from "react-redux"
import { addBooking, removeFlight } from "../../Redux/actiomFun"

const FlightBooking = () => {
  const flight = useSelector((state) => state.booking.bookingList)
  const dispatch = useDispatch()

  const handleSubmit = (e) => {
    e.preventDefault()
    const form = e.target
    const from = form.from.value
    const to = form.to.value
    const date = form.date.value
    const bookingClass = form.bookingClass.value
    const bookingDetails = {
      from,
      to,
      date,
      bookingClass,
    }
    dispatch(addBooking(bookingDetails))
  }

  const handleDelete = (id) => {
    dispatch(removeFlight(id))
  }

  return (
    <div className="bg-cyan-100 min-h-screen md:pt-20 pt-12">
      <div className="md:w-2/3 mx-auto p-2 bg-cyan-50 rounded-md">
        <div className="p-2">
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 place-items-center gap-4">
              <div className="border-2 md:w-2/3 w-full p-2">
                <h1 className="text-gray-500">Departure</h1>
                <div className="flex items-center gap-2">
                  <span>
                    <BiMap />
                  </span>
                  <select
                    required
                    name="from"
                    className="select select-sm w-full max-w-xs"
                  >
                    <option>Dhaka</option>
                    <option>Sylhet</option>
                    <option>Rajshahi</option>
                    <option>Chattogram</option>
                  </select>
                </div>
              </div>
              <div className="border-2 md:w-2/3 w-full p-2">
                <h1 className="text-gray-500">Destination</h1>
                <div className="flex items-center">
                  <BiMap />
                  <select
                    required
                    name="to"
                    className="select  select-sm w-full max-w-xs"
                  >
                    <option>Dhaka</option>
                    <option>Sylhet</option>
                    <option>Rajshahi</option>
                    <option>Chattogram</option>
                  </select>
                </div>
              </div>
              <div className="border-2 md:w-2/3 w-full p-2">
                <h1 className="text-gray-500">Date</h1>
                <input required name="date" type="date" />
              </div>
              <div className="border-2 md:w-2/3 w-full p-2">
                <h1 className="text-gray-500">Class</h1>
                <select
                  name="bookingClass"
                  required
                  className="select select-sm w-full max-w-xs"
                >
                  <option>Business</option>
                  <option>Economy</option>
                </select>
              </div>
            </div>
            <div className="flex items-center justify-center mt-4">
              <div className="flex items-center p-1 rounded border-[#7408CD] border-2 cursor-pointer">
                <AiOutlinePlus color="#7408CD" />
                <button type="submit" className="text-[#7408CD] font-bold">
                  Book
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div className="md:w-2/3 mx-auto p-2 bg-cyan-50 mt-4 rounded-md">
        <div className="overflow-x-auto overflow-y-auto max-h-96 scroll-y border-2 p-2">
          <table className="table">
            <thead>
              <tr>
                <th>#</th>
                <th>Departure From</th>
                <th>Destination To</th>
                <th>Date</th>
                <th>Class</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {flight.map((f, index) => (
                <tr key={f.id}>
                  <th>{index + 1}</th>
                  <td>{f.booking.from}</td>
                  <td>{f.booking.to}</td>
                  <td>{f.booking.date}</td>
                  <td>{f.booking.bookingClass}</td>
                  <td className="btn" onClick={() => handleDelete(f.id)}>
                    <BiTrash color="red" size={24} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default FlightBooking
