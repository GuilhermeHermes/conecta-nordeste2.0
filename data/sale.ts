import { prisma } from '@/lib/db'

// Função para obter uma venda pelo ID
export const getSaleById = async (id: string) => {
    try {
        const sale = await prisma.sale.findUnique({
            where: { id },
            include: {
                seller: true,
            },
        });
        return sale;
    } catch {
        return null;
    }
};

// Função para obter todas as vendas
export const getAllSales = async () => {
    try {
        const sales = await prisma.sale.findMany({
            include: {
                seller: true,
            },
        });
        return sales;
    } catch {
        return [];
    }
};

// Função para criar uma nova venda
export const createSale = async (
    product: string,
    quantity: number,
    price: number,
    sellerId: string,
    status: string = 'pending'
) => {
    try {
        const newSale = await prisma.sale.create({
            data: {
                product,
                quantity,
                price,
                totalAmount: quantity * price,
                sellerId,
                status,
            },
        });
        return newSale;
    } catch (error) {
        console.error('Error creating sale:', error);
        return null;
    }
};

// Função para atualizar o status de uma venda
export const updateSaleStatus = async (id: string, status: string) => {
    try {
        const updatedSale = await prisma.sale.update({
            where: { id },
            data: { status },
        });
        return updatedSale;
    } catch (error) {
        console.error('Error updating sale status:', error);
        return null;
    }
};
