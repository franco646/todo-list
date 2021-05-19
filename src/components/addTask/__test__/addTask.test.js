import React from 'react'
import { render, fireEvent, screen, waitFor } from '../../../redux/test-utils';
import '@testing-library/jest-dom/extend-expect'

import AddTask from '../addTask';

describe('<AddTask />', () => {
    it('should handle submit on click add button', async () => {
        const addTaskMock = jest.fn()

        render(<AddTask addTask={addTaskMock} />)

        fireEvent.click(screen.getByText('Crear tarea'))

        await waitFor(() => expect(addTaskMock).toHaveBeenCalledTimes(2))
    })
})
