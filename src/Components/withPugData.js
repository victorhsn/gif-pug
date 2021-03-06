import React from 'react'


export function withPugData(query) {
    return WrappedComponent => {
        return class extends React.Component {
            state = {
                pugs: [],
                loading: true
            }

            componentDidMount = async () => {
                const response = await fetch(`https://api.giphy.com/v1/gifs/search?q=${query}&limit=24&api_key=dc6zaTOxFJmzC`)
                const pugs = await response.json()
                this.setState({ pugs, loading: false })
            }

            render() {
                return <WrappedComponent pugsData={this.state} {...this.props} />
            }
        }
    }
}