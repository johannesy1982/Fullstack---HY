const Notification = ({ notification }) => {
  if (notification === null) {
    return null
  }

  return <p className={notification.type}>{notification.message}</p>
}

export default Notification