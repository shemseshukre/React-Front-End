export const styles = () => ({
    root: {
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        color: "#000133",
    },
    appBar: {
        background: "#00022E",
        color: "#FC86AA",
    },
    icon: {
        padding: "10px",
    },
    title: {
        margin: "auto"
    },
    container: {
        display: "flex",
        flex: 1,
    },
    drawer: {
        background: "#D8DCD6",
        position: "static",
        transition: "width .7s",
    },
    closed: {
        width: "0px",
    },
    opened: {
        width: "240px",
    },
    main: {
        flex: 1,
        background: "#f5f5f5",
        color: "black",
    },
    footer: {
        background: "#f5f5f5",
        height: "50px",
        color: "#FC86AA",
    },
})