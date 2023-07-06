
interface IHistoryNumbers {
  current: string;
  previous: string;
}
interface Props {
  data: {
    title: string;
    timeframes: {
      daily: IHistoryNumbers,
      weekly: IHistoryNumbers,
      month: IHistoryNumbers,
    },
  },
  activeFilter: string,

}

export const UserBoxCategory = ({ data, activeFilter = "daily" }: Props) => {
  const { title } = data;
  const filteredData = {
    title: data.title,
    timeframes:
      data.timeframes[activeFilter as keyof typeof data.timeframes]
  }

  return (
    <div className="c-user-box-category__container">
      <div className="c-user-box-category__header" />
      <div className="c-user-box-category__main-content">
        <div className="c-user-box-category__main-content-first-line">
          <h2 className="c-user-box-category__main-content-first-line-category">{title}</h2>
          <div>...</div>
        </div>

        <div className="c-user-box-category__main-content-second-line">
          <h2>{filteredData?.timeframes?.current}hrs</h2>
          <div>Last Week - {filteredData?.timeframes?.previous}hrs</div>
        </div>

      </div>
    </div>

  )
}
