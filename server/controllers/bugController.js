import Bug from '../models/Bug.js';

export const getBugs = async (req, res, next) => {
  try {
    const bugs = await Bug.find();
    res.json(bugs);
  } catch (err) {
    next(err);
  }
};

export const createBug = async (req, res, next) => {
  try {
    const bug = new Bug(req.body);
    const saved = await bug.save();
    res.status(201).json(saved);
  } catch (err) {
    next(err);
  }
};

export const updateBug = async (req, res, next) => {
  try {
    const updated = await Bug.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updated);
  } catch (err) {
    next(err);
  }
};

export const deleteBug = async (req, res, next) => {
  try {
    await Bug.findByIdAndDelete(req.params.id);
    res.status(204).end();
  } catch (err) {
    next(err);
  }
};
