import * as Turbo from '@hotwired/turbo'

Turbo.start()

function onBeforeRender(event) {
    // Pause Rendering
    event.preventDefault()
    if (!document.createDocumentTransition) {
        return event.detail.resume()
    }
    const transition = document.createDocumentTransition()
    transition.start(() => {
        event.detail.resume()
    })
}

document.addEventListener('turbo:load', (event) => {
    document.addEventListener('turbo:before-render', onBeforeRender, {
        once: true,
    })
})