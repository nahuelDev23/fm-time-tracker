import Image from "next/image"

export const UserBoxProfileComponent = ({ onChangeFilter, activeFilter }: any) => {
  console.log("re-re")
  return (
    <div className="c-user-box-profile">
      <div className="c-user-box-profile__container">
        <div className="c-user-box-profile__header">
          <div className="c-user-box-profile__header-image">
            <Image src="/images/image-jeremy.png" alt="images-jeremy" fill />
          </div>
          <div className="c-user-box-profile__header-data">
            <h2 className="c-user-box-profile__header-title">
              Report for
            </h2>
            <h1 className="c-user-box-profile__header-username">Jeremy Robson</h1>
          </div>
        </div>

        <div className="c-user-box-profile__menu">
          <ul className="c-user-box-profile__menu-list">
            <li onClick={() => onChangeFilter("daily")} className={`c-user-box-profile__menu-list-item ${activeFilter === "daily" && 'active'}`}>Daily</li>
            <li onClick={() => onChangeFilter("weekly")} className={`c-user-box-profile__menu-list-item ${activeFilter === "weekly" && 'active'}`}>Weekly</li>
            <li onClick={() => onChangeFilter("monthly")} className={`c-user-box-profile__menu-list-item ${activeFilter === "monthly" && 'active'}`}>Monthly</li>
          </ul>
        </div>
      </div>
    </div >

  )
}
