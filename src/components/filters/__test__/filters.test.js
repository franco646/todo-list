import React from 'react'
import { render, fireEvent, screen } from '../../../redux/test-utils';

import Filters from '../filters';

describe('<AddTask />', () => {
    it('should calls setPriorityFilter on change the priority filter', async () => {
        const setFilterMock = jest.fn()

        render(<Filters setPriorityFilter={setFilterMock} />)

        fireEvent.change(screen.getByTestId('select-priority'), { target: { value: 2 } })

        expect(setFilterMock).toHaveBeenCalledTimes(1)
    })

    it('should calls setStatusFilter on change the priority filter', async () => {
        const setFilterMock = jest.fn()

        render(<Filters setStatusFilter={setFilterMock} />)

        fireEvent.change(screen.getByTestId('select-status'), { target: { value: 2 } })

        expect(setFilterMock).toHaveBeenCalledTimes(1)
    })
})