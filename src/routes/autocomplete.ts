import { Router } from 'express';
import paginate from 'express-paginate';
import { prisma } from '../utils';

const router = Router();

router.get('/', paginate.middleware(10, 50), async (req, res) => {
  try {
    const q = req.query.q as string;
    const offset = parseInt(req.query.offset as string);
    const result = await prisma.branches.findMany({
      skip: req.offset || offset,
      take: parseInt(req.query.limit as string),
      where: {
        branch: { contains: q, mode: 'insensitive' }
      }
    });
    res.setHeader('Content-Type', 'application/json; charset=utf-8');
    res.send(
      JSON.stringify({ branches: result }, (_, v) =>
        typeof v === 'bigint' ? parseInt(v.toString()) : v
      )
    );
  } catch (e) {
    console.error(e);
    res.status(500).send(e);
  }
});

export default router;
